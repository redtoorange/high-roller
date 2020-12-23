import attacker from "@/store/ranged/attacker";
import weapon from "@/store/ranged/weapon";

const ranged = {
    namespaced: true,
    modules: {
        attacker,
        weapon
    }
};

export default ranged;
