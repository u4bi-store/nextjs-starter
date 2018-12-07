import React, { Component } from 'react'

import { Button } from 'antd'

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { postId: id }
    }

    render () {
        return(
            <div className='Posts'>
                <h1>My blog post #{this.props.postId}</h1>

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