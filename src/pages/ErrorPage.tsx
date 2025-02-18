import React from 'react';
import { useRouteError } from 'react-router';

interface RouteError {
    status: number;
    statusText: string;
    data?: string;
}

const ErrorPage = () => {
    const error = useRouteError();

    const { status, statusText, data } = error as RouteError;

    return (
        <div>
            <h1>OOPS!!</h1>
            <h2>Something went wrong</h2>
            <h3>
                {status}: {statusText}
            </h3>
            <p>{data ?? 'An unknown error occurred.'}</p>
        </div>
    );
};

export default ErrorPage;
