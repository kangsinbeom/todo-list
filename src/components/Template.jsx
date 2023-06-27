import React from 'react';
import InsertContainer from '../containers/InsertContainer';
import ListContainer from '../containers/ListContainer';
function Template(props) {
    return (
        <>
            <header></header>
            <InsertContainer />
            <ListContainer />
            <footer></footer>
        </>
    );
}

export default Template;