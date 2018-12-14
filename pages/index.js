import React, { Component } from 'react'

import { Grommet, Button, Box, Image } from 'grommet'
import { grommet } from 'grommet/themes'
import { Add } from 'grommet-icons'

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
                        <Grommet theme={ grommet }>
                            <Wrapper>

                                <p>{ app.state.user.name }</p>

                                <Button icon={<Add />} label="Add" onClick={ () => app.setName('updated') } primary />

                            </Wrapper>
                        </Grommet>
                        )

                    }
                }
            </Subscribe>
        )
    }

}