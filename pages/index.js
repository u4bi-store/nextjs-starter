import React, { Component } from 'react'

import { Button } from 'antd'

import { Subscribe } from 'unstated'

import { AppContainer } from '../providers/containers'

import Wrapper from '../components/Wrapper'

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

                                    <Button onClick={ () => app.setName('updated') }>setName('updated')</Button>

                                </Wrapper>
                            </div>
                        )

                    }
                }
            </Subscribe>
        )
    }

}