class StatisticalEngine {
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
        const numRolls = models * attacks;

        if (isNaN(attacks)) {
            console.log('attacks is NaN, not supported yet');
            return;
        }

        // Do special rules
        if (state.attacker.hitSpecialRules) {
            console.log('Do Hit Special Rules here')
        }

        const hitChance = 1 - ((state.attacker.BS - 1) / 6)
        const hits = numRolls * hitChance;

        resultSet.hitCount = hits;
        resultSet.missCount = numRolls - hits;
        resultSet.hitChance = hitChance;

        console.log(resultSet);
    }

    processToWound(state, resultSet) {
        const strength = Number(state.weapon.strength);
        const toughness = Number(state.defender.toughness);
        const numRolls = resultSet.hitCount;

        // Do special rules
        if (state.weapon.woundSpecialRules) {
            console.log('Do Wound Special Rules here')
        }

        const woundRollNeeded = this.calculateWoundRoll(strength, toughness);
        const woundChance = 1 - ((woundRollNeeded - 1) / 6);
        const wounds = numRolls * woundChance;

        resultSet.woundCount = wounds;
        resultSet.woundFailCount = numRolls - wounds;

        resultSet.woundSuccessChance = woundChance;
    }

    processSaves(state, resultSet) {
        const armorSave = Number(state.defender.armorSave);
        const armorPen = Number(state.weapon.armorPen);

        if ((armorSave === null || armorSave + armorPen > 6) && !state.defender.hasInvulnerable) {
            resultSet.failedSaves = resultSet.woundCount;
            resultSet.saveSuccessChance = 0;
        } else {
            const numRolls = resultSet.woundCount;
            let actualSave = armorSave + armorPen;
            if (state.defender.hasInvulnerable && state.defender.invulnerableSave < actualSave) {
                resultSet.useInvulerable = true;
                actualSave = state.defender.invulnerableSave;
            } else {
                resultSet.useInvulerable = false;
            }

            const savedChance = 1 - ((actualSave - 1) / 6);
            const passedSaves = numRolls * savedChance;

            resultSet.failedSaves = numRolls - passedSaves;
            resultSet.passedSaves = passedSaves;

            resultSet.saveSuccessChance = savedChance;
        }
    }


    processDamage(state, resultSet) {
        const weaponDamage = Number(state.weapon.damage);
        const failedSaves = resultSet.failedSaves;
        resultSet.damagePerWound = weaponDamage;

        const initialWounds = weaponDamage * failedSaves;
        if (state.defender.hasFeelNoPain) {
            resultSet.useFeelNoPain = true;

            const feelNoPainChance = 1 - (state.defender.feelNoPainSave - 1) / 6;
            const savedWounds = initialWounds * feelNoPainChance;

            resultSet.totalWounds = initialWounds - savedWounds;
            resultSet.savedWounds = savedWounds;
            resultSet.feelNoPainChance = feelNoPainChance;
        } else {
            resultSet.useFeelNoPain = false;
            resultSet.totalWounds = initialWounds;
        }
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

const StatEngine = new StatisticalEngine();
export default StatEngine;
