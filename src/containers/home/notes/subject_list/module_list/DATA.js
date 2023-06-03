const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Redux',
        def: 'Redux is a predictable state container for JavaScript apps.',
        desc: 'Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Actions',
        def: 'An action, is an object that contains the payload of information.',
        desc: `It is a plain JavaScript object that has a type field. An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.
        actions are the only source of information for the Redux store to be updated. 
        `
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Action Creator',
        def: 'An action creator is a function that creates and returns an action object.',
        desc: ''
    },
    {
        id: 'bd7arcbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Reducers',
        def: 'Reducers are pure functions that take the current state of an application, perform an action, and return a new state.',
        desc: 'These states are stored as objects, and they specify how the state of an application changes in response to an action sent to the store.'
    },
    {
        id: '3ac6u8afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Store',
        def: 'The current Redux application state lives in an object called the store.',
        desc: ''
    },
    {
        id: '58694a0fl-3da1-471f-bd96-145571e29d72',
        title: 'Dispatch',
        def: 'The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object.',
        desc: 'The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value.'
    },
];
export default DATA;