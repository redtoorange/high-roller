import attacker from "@/store/melee/attacker";
import weapon from "@/store/melee/weapon";

const melee = {
    namespaced: true,
    modules: {
        attacker,
        weapon
    }
};

export default melee;
