import React from 'react';
import { createCart } from '../api';
import UseLogin from './useLogin';

const UseCarts = () => {
    const { users } = UseLogin()
    console.log(users);

    const post = React.useCallback(data => {
        createCart(data, users?.id)
    }, [users?.id])

    console.log(post);
    return {
        actions: {
            post,
        }
    }
}


export default UseCarts;
