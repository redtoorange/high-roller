class StatisticalEngine {
    runCalculations(state, type) {
        const resultSet = {};

        if (type === 'MELEE') {
            this.processToHitRanged(state, resultSet);
            this.processToWound(state, resultSet);
            this.processSaves(state, resultSet);
            this.processDamage(state, resultSet);
        } else if (type === 'RANGED') {
            this.processToHitMelee(state, resultSet);
            this.processToWound(state, resultSet);
            this.processSaves(state, resultSet);
            this.processDamage(state, resultSet);
        }


        return resultSet;
    }

    processToHitRanged(state, resultSet) {
        const models = Number(state.ranged.attacker.models);
        const attacks = Number(state.ranged.weapon.attacks);
        const numRolls = models * attacks;
        const hasHitRules = state.ranged.attacker.hitSpecialRules;
        const reRollMisses = state.ranged.attacker.hitRules.reRollMisses;
        const reRollOnes = state.ranged.attacker.hitRules.reRollOnes;
        const baseHitValue = state.ranged.attacker.BS;
        const explodingHits = state.ranged.attacker.hitRules.exploding;
        const explodingValue = Number(state.ranged.attacker.hitRules.explodesOn);
        const toHitModifier = Number(state.ranged.attacker.hitRules.mod);

        if (isNaN(attacks)) {
            console.log('attacks is NaN, not supported yet');
            return;
        }

        // Do special rules
        if (!hasHitRules) {
            const hitChance = 1 - ((baseHitValue - 1) / 6)
            const hits = numRolls * hitChance;

            resultSet.hitCount = hits;
            resultSet.missCount = numRolls - hits;
            resultSet.hitChance = hitChance;
        } else {
            const percent = numRolls * (1 / 6);
            const rolls = [0, percent, percent, percent, percent, percent, percent];

            // Handle Base ReRolls
            if (reRollMisses) {
                this.reRollMisses(rolls, baseHitValue);
            } else if (reRollOnes) {
                this.reRollOnes(rolls);
            }

            // Handle Exploding Rolls
            if (explodingHits && explodingValue) {
                resultSet.exploded = true;

                let additionalRolls = 0;
                for (let i = explodingValue; i < rolls.length; i++) {
                    additionalRolls += rolls[i];
                }
                resultSet.explodingRolls = additionalRolls;

                // Create new roll pool
                const newPercent = additionalRolls * (1 / 6);
                const explodedRolls = [0, newPercent, newPercent, newPercent, newPercent, newPercent, newPercent];

                // Handle ReRolls for new pool
                if (reRollMisses) {
                    this.reRollMisses(explodedRolls, baseHitValue);
                } else if (reRollOnes) {
                    this.reRollOnes(explodedRolls);
                }

                // Add to base pool
                for (let i = 1; i < explodedRolls.length; i++) {
                    rolls[i] += explodedRolls[i];
                }
            }

            let hits = 0;
            let misses = rolls[1];
            const hitMod = toHitModifier;
            for (let i = 2; i < rolls.length; i++) {
                if ((i + hitMod) >= baseHitValue) {
                    hits += rolls[i];
                    console.log('hit: ' + (i + hitMod));
                } else {
                    misses += rolls[i];
                }
            }

            resultSet.hitCount = hits;
            resultSet.missCount = misses;
            resultSet.hitChance = hits / (hits + misses);
        }
    }

    processToHitMelee(state, resultSet) {
        const models = Number(state.melee.attacker.models);
        const attacks = Number(state.melee.attacker.attacks);
        const numRolls = models * attacks;
        const hasHitRules = state.melee.attacker.hitSpecialRules;
        const reRollMisses = state.melee.attacker.hitRules.reRollMisses;
        const reRollOnes = state.melee.attacker.hitRules.reRollOnes;
        const baseHitValue = state.melee.attacker.WS;
        const explodingHits = state.melee.attacker.hitRules.exploding;
        const explodingValue = Number(state.melee.attacker.hitRules.explodesOn);
        const toHitModifier = Number(state.melee.attacker.hitRules.mod);

        if (isNaN(attacks)) {
            console.log('attacks is NaN, not supported yet');
            return;
        }

        // Do special rules
        if (!hasHitRules) {
            const hitChance = 1 - ((baseHitValue - 1) / 6)
            const hits = numRolls * hitChance;

            resultSet.hitCount = hits;
            resultSet.missCount = numRolls - hits;
            resultSet.hitChance = hitChance;
        } else {
            const percent = numRolls * (1 / 6);
            const rolls = [0, percent, percent, percent, percent, percent, percent];

            // Handle Base ReRolls
            if (reRollMisses) {
                this.reRollMisses(rolls, baseHitValue);
            } else if (reRollOnes) {
                this.reRollOnes(rolls);
            }

            // Handle Exploding Rolls
            if (explodingHits && explodingValue) {
                resultSet.exploded = true;

                let additionalRolls = 0;
                for (let i = explodingValue; i < rolls.length; i++) {
                    additionalRolls += rolls[i];
                }
                resultSet.explodingRolls = additionalRolls;

                // Create new roll pool
                const newPercent = additionalRolls * (1 / 6);
                const explodedRolls = [0, newPercent, newPercent, newPercent, newPercent, newPercent, newPercent];

                // Handle ReRolls for new pool
                if (reRollMisses) {
                    this.reRollMisses(explodedRolls, baseHitValue);
                } else if (reRollOnes) {
                    this.reRollOnes(explodedRolls);
                }

                // Add to base pool
                for (let i = 1; i < explodedRolls.length; i++) {
                    rolls[i] += explodedRolls[i];
                }
            }

            let hits = 0;
            let misses = rolls[1];
            const hitMod = toHitModifier;
            for (let i = 2; i < rolls.length; i++) {
                if ((i + hitMod) >= baseHitValue) {
                    hits += rolls[i];
                    console.log('hit: ' + (i + hitMod));
                } else {
                    misses += rolls[i];
                }
            }

            resultSet.hitCount = hits;
            resultSet.missCount = misses;
            resultSet.hitChance = hits / (hits + misses);
        }
    }

    processToWound(state, resultSet) {
        const strength = Number(state.weapon.strength);
        const toughness = Number(state.defender.toughness);
        const numRolls = resultSet.hitCount;

        // Do special rules
        if (!state.weapon.woundSpecialRules) {
            const woundRollNeeded = this.calculateWoundRoll(strength, toughness);
            const woundChance = 1 - ((woundRollNeeded - 1) / 6);
            const wounds = numRolls * woundChance;

            resultSet.woundCount = wounds;
            resultSet.woundFailCount = numRolls - wounds;
            resultSet.woundSuccessChance = woundChance;
        } else {
            const percent = numRolls * (1 / 6);
            const rolls = [0, percent, percent, percent, percent, percent, percent];

            // Handle Base ReRolls
            if (state.weapon.woundRules.reRollMisses) {
                this.reRollMisses(rolls, this.calculateWoundRoll(strength, toughness));
            } else if (state.weapon.woundRules.reRollOnes) {
                this.reRollOnes(rolls);
            }

            // Handle Exploding Rolls
            // if (state.attacker.hitRules.exploding && state.attacker.hitRules.explodesOn) {
            //     resultSet.exploded = true;
            //
            //     let additionalRolls = 0;
            //     for (let i = Number(state.attacker.hitRules.explodesOn); i < rolls.length; i++) {
            //         additionalRolls += rolls[i];
            //     }
            //     resultSet.explodingRolls = additionalRolls;
            //
            //     // Create new roll pool
            //     const newPercent = additionalRolls * (1 / 6);
            //     const explodedRolls = [0, newPercent, newPercent, newPercent, newPercent, newPercent, newPercent];
            //
            //     // Handle ReRolls for new pool
            //     if (state.attacker.hitRules.reRollMisses) {
            //         this.reRollMisses(explodedRolls, state.attacker.BS);
            //     } else if (state.attacker.hitRules.reRollOnes) {
            //         this.reRollOnes(explodedRolls);
            //     }
            //
            //     // Add to base pool
            //     for (let i = 1; i < explodedRolls.length; i++) {
            //         rolls[i] += explodedRolls[i];
            //     }
            // }

            let wounds = 0;
            let fails = rolls[1];
            const hitMod = Number(state.weapon.woundRules.mod);
            for (let i = 2; i < rolls.length; i++) {
                if ((i + hitMod) >= this.calculateWoundRoll(strength, toughness)) {
                    wounds += rolls[i];
                } else {
                    fails += rolls[i];
                }
            }

            resultSet.woundCount = wounds;
            resultSet.woundFailCount = fails;
            resultSet.woundSuccessChance = wounds / (wounds + fails);
        }
    }

    processSaves(state, resultSet) {
        const armorSave = Number(state.defender.armorSave);
        console.log(armorSave)
        const armorPen = Number(state.weapon.armorPen);

        if ((!armorSave || armorSave + armorPen > 6) && !state.defender.hasInvulnerable) {
            resultSet.failedSaves = resultSet.woundCount;
            resultSet.passedSaves = 0;

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

    reRollOnes(rolls) {
        // Gather Ones and redistribute them
        const ones = rolls[1];
        rolls[1] = 0;
        for (let i = 1; i < rolls.length; i++) {
            rolls[i] += ones * (1 / 6);
        }
    }

    reRollMisses(rolls, bs) {
        // Gather the misses
        let initialMisses = 0;
        for (let i = 1; i < bs; i++) {
            initialMisses += rolls[i];
            rolls[i] = 0;
        }

        // Redistribute them
        for (let i = 1; i < rolls.length; i++) {
            rolls[i] += initialMisses * (1 / 6);
        }
    }
}

const StatEngine = new StatisticalEngine();
export default StatEngine;
