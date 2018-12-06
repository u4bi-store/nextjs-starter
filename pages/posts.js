import React, { Component } from 'react'
import { Subscribe } from 'unstated'

import { AppContainer } from '../providers/containers'

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { postId: id }
    }

    render () {
        return(
            <Subscribe to={ [ AppContainer ]}>
                {
                    (app) => {

                        console.log(app.state)

                        return(
                            <div>
                                <h1>My { app.state.title } #{this.props.postId}</h1>
                            </div>
                        )

                    }
                }
            </Subscribe>
        )
    }

}