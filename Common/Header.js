

import React from 'react';
import Header from "react-native/Libraries/NewAppScreen/components/Header";

const HeaderComponent: () => React$Node = () => {
    return (
        <>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </>
    );
};


export default HeaderComponent;

