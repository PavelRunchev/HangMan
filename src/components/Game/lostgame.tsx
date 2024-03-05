import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

export default function LostGame(props: any) {
    const { lostGame, setLostGame } = props.modals;

    let helper = props.language === 'EN' 
      ? <div className='h5'>Word is: <span className='font-weight-bold game-life '>{props.currentWord}</span></div> 
      : <div className='h5'>Думата е: <span className='font-weight-bold game-life '>{props.currentWord}</span></div>;

    return(
        <MDBModal open={lostGame} setOpen={setLostGame} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='text-danger font-weight-bold'>{props.language === 'EN' ? 'You Lost Game!' : 'Изгубихте Играта!'}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setLostGame(!lostGame)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='text-danger font-weight-bold h3'> {props.language === 'EN' ? 'GAME OVER!' : 'Край на Играта!'}</MDBModalBody>

            <MDBModalFooter>
              {helper}

              <MDBBtn color='secondary' onClick={() => setLostGame(!lostGame)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    )
}