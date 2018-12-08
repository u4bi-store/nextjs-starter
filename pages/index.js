import React, { Component } from 'react'

import { Subscribe } from 'unstated'

import { AppContainer } from '../providers/containers'

import Wrapper from '../components/Wrapper'

import logo from '../_.png'

export default class extends Component {

    render () {
        return(
            <Subscribe to={ [ AppContainer ]}>
                {
                    (app) => {

                        return(
                            <div className='Index'>
                                <Wrapper>

                                    <p>{ app.state.user.name }</p>
                                    <img src={ logo } />
                                    <button onClick={ () => app.setName('updated') }>Semantic</button>

                                </Wrapper>
                            </div>
                        )

                    }
                }
            </Subscribe>
        )
    }

}