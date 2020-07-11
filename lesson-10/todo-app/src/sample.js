import React, { Component, Fragment } from "react";

export class Sample extends Component {
    render() {
        return (
            //必ず一つの要素で返すこと 
            <Fragment>
                <div>
                    <h1>View Component Created.</h1>
                    <h1>View Component Created.</h1>
                    <h1>View Component Created.</h1>
                </div>
            </Fragment>
        );
    }
}