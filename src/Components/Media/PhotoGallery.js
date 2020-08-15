import React from 'react'
import {Header, Icon} from 'semantic-ui-react'
import Gallery from 'react-photo-gallery'
import Carousel, {Modal, ModalGateway} from 'react-images'
import photos from '../../data/PhotoGallery'

const style = {
    padding: '30px 0'
}

class PhotoGallery extends React.Component{
    state = {currentImage: 0, viewerIsOpen: false}

    setCurrentImage (index) {
        this.setState({currentImage: index})
    }

    setViewerIsOpen(isOpen) {
        this.setState({viewerIsOpen: isOpen})
    }

    openLightBox = (event, {photo, index}) => {
        this.setCurrentImage(index)
        this.setViewerIsOpen(true)
    }

    closeLightBox = () => {
        this.setCurrentImage(0)
        this.setViewerIsOpen(false)
    }

    render() {
        var {viewerIsOpen, currentImage} = this.state
        return (
            <div className="PhotoGallery" style={style}>
                <Header size="medium">
                    <Icon name="image outline"></Icon>
                    <Header.Content>Photo Gallery</Header.Content>
                    <Header.Subheader>Our history in images</Header.Subheader>
                </Header>
                <Gallery photos={photos} onClick={this.openLightBox}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={this.closeLightBox}>
                            <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                        ) : null}
                    </ModalGateway>
            </div>
        )
    }
}

export default PhotoGallery