import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            coaches: [
                {
                    id: 1,
                    name: "Arthas Menethil",
                    rate: "$40/hr",
                    skills: ['Paladin', 'Death Knight'],
                },
                {
                    id: 2,
                    name: "Illidan Stormrage",
                    rate: "$30/hr",
                    skills: ['Demon-hunter'],
                },
                {
                    id: 3,
                    name: "Anduin Wrynn",
                    rate: "$25/hr",
                    skills: ['Priest', 'Warrior'],
                },

            ]
        }
    }
});



export default store;