import {rollDice} from "@/services/DiceRoller";

class SimulationEngine {
    runCalculations(state) {
        const resultSet = {};

        this.processToHit(state, resultSet);
        this.processToWound(state, resultSet);
        this.processSaves(state, resultSet);
        this.processDamage(state, resultSet);

        return resultSet;
    }

    processToHit(state, resultSet) {
        const models = Number(state.attacker.models);
        const attacks = Number(state.weapon.attacks);
        if (isNaN(attacks)) {
            console.log('attacks is NaN, not supported yet');
            return;
        }

        const numRolls = models * attacks;

        // Runs the intial rolls
        const hitRolls = [];
        for (let i = 0; i < numRolls; i++) {
            hitRolls.push(rollDice(6));
        }

        // Do special rules
        if (state.attacker.hitSpecialRules) {
            console.log('Do Hit Special Rules here')
        }

        const successes = [];
        const misses = [];
        for (let i = 0; i < hitRolls.length; i++) {
            if (hitRolls[i] >= state.attacker.BS) {
                successes.push(hitRolls[i]);
            } else {
                misses.push(hitRolls[i]);
            }
        }

        resultSet.hitCount = successes.length;
        resultSet.hitSuccessRolls = successes;
        resultSet.hitFailRolls = misses;

        console.log(resultSet);
    }

    processToWound(state, resultSet) {
        const strength = Number(state.weapon.strength);
        const toughness = Number(state.defender.toughness);
        const numRolls = resultSet.hitCount;

        const woundRolls = [];
        for (let i = 0; i < numRolls; i++) {
            woundRolls.push(rollDice(6));
        }

        // Do special rules
        if (state.weapon.woundSpecialRules) {
            console.log('Do Wound Special Rules here')
        }

        const successes = [];
        const woundRollNeeded = this.calculateWoundRoll(strength, toughness);
        const fails = [];
        for (let i = 0; i < woundRolls.length; i++) {
            if (woundRolls[i] >= woundRollNeeded) {
                successes.push(woundRolls[i]);
            } else {
                fails.push(woundRolls[i]);
            }
        }

        resultSet.woundCount = successes.length;
        resultSet.woundSuccessRolls = successes;
        resultSet.woundFailRolls = fails;
    }

    processSaves(state, resultSet) {
        const armorSave = Number(state.defender.armorSave);
        const armorPen = Number(state.weapon.armorPen);

        if ((armorSave === null || armorSave + armorPen > 6) && !state.defender.hasInvulnerable) {
            resultSet.failedSaves = resultSet.woundCount;
            resultSet.saveSuccessRolls = [];
            resultSet.saveFailRolls = [];
        } else {
            const numRolls = resultSet.woundCount;

            const saveRolls = [];
            for (let i = 0; i < numRolls; i++) {
                saveRolls.push(rollDice(6));
            }

            const successes = [];
            const fails = [];
            let actualSave = armorSave + armorPen;
            if (state.defender.hasInvulnerable && state.defender.invulnerableSave > actualSave) {
                resultSet.useInvulerable = true;
                actualSave = state.defender.invulnerableSave;
            } else {
                resultSet.useInvulerable = false;
            }

            for (let i = 0; i < saveRolls.length; i++) {
                if (saveRolls[i] >= actualSave) {
                    successes.push(saveRolls[i]);
                } else {
                    fails.push(saveRolls[i]);
                }
            }

            resultSet.failedSaves = fails.length;
            resultSet.saveSuccessRolls = successes;
            resultSet.saveFailRolls = fails;
        }
    }


    processDamage(state, resultSet) {
        console.log('processing damage');
        console.log(state);
        console.log(resultSet);
    }

    calculateWoundRoll(strength, toughness) {
        if (strength > toughness) {
            if (strength / 2 >= toughness) {
                return 2;
            }

            return 3;
        } else if (strength < toughness) {
            if (toughness / 2 >= strength) {
                return 6;
            }

            return 5;
        }

        return 4;
    }
}

const SimEngine = new SimulationEngine();
export default SimEngine;
