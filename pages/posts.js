import React, { Component } from 'react'
import Link from 'next/link'

import './posts.scss'

import styled from 'styled-components'

const Title = styled.h1` color: blue; font-size: 50px;`

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { postId: id }
    }

    render () {
        return(
            <div className='Posts'>
                <h1>My blog post #{this.props.postId}</h1>

                <Title>Styled components</Title>
                                    
                <ul>
                    <li><Link href='/posts/2' as='/posts/2'><a>post #2</a></Link></li>
                </ul>

            </div>
        )

    }

}