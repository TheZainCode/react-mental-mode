const state={
    likes:0
};
function render(){
    console.log(`Total Likes: ${state.likes}`);
};
function updateLikes(){
    state.likes=state.likes+1;
    render();
};
render();
updateLikes();
updateLikes();
updateLikes();