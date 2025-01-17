// Code YouTubeDebugger Component Here
import React, { Component } from 'react' 
// import { NormalModuleReplacementPlugin } from 'webpack'

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState({settings: {...this.state.settings, bitrate:12}})
    }

    changeRes = () => {
        this.setState({settings: {
            ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
        }})
    }


    render() {
        return(
            <div>
                <button onClick={this.changeBitrate} className='bitrate'></button>
                <button onClick={this.changeRes} className='resolution'></button>
            </div>
        )
    }
}