const initState = {
    posts: [
        {id: "1",title:"Squritle Laid an Egg" ,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra tellus quis efficitur suscipit. Etiam et placerat leo. Nulla lobortis massa et lectus aliquet, vel dignissim velit ullamcorper."},
        {id: "2",title:"Charmender Laid an Egg" ,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra tellus quis efficitur suscipit. Etiam et placerat leo. Nulla lobortis massa et lectus aliquet, vel dignissim velit ullamcorper."},
        {id: "3",title:"a Helix Fossil was Found" ,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra tellus quis efficitur suscipit. Etiam et placerat leo. Nulla lobortis massa et lectus aliquet, vel dignissim velit ullamcorper."}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type=== 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
}
 export default rootReducer