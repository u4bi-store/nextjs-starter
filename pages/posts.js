import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { postId: id }
    }

    render () {
        return(
            <div className='Posts'>
                <h1>My blog post #{this.props.postId}</h1>
                                    
                <ul>
                    <li><Link href='/posts/2' as='/posts/2'><a>post #2</a></Link></li>
                </ul>

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