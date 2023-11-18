import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import video1 from './video-1.mp4'
function Video(props, ref) {

    var videoRef = useRef();
    // useImperativeHandle(ref, () => {
    //     return {
    //         play: () => { videoRef.current.play() },
    //         pause: () => { videoRef.current.pause() }
    //     };
    // })
    return (<video
        ref={videoRef}
        src={video1}
        width={300}
    />)
}
export default forwardRef(Video);