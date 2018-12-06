import React, { Component } from 'react'
import { Subscribe } from 'unstated'

import { Button } from 'antd'

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
                            <div className='Posts'>
                                <h1>My { app.state.title } #{this.props.postId}</h1>

                                <Button>Ant D</Button>

                                <style jsx>{`

                                    $color: red;

                                    .Posts {

                                        h1 {
                                            &:hover {
                                                color: $color;
                                            }

                                            @media only screen and (max-width: 480px) {
                                                font-size: 1rem;
                                            }
                                        }

                                    }
                                `}</style>

                            </div>
                        )

                    }
                }
            </Subscribe>
        )
    }

}