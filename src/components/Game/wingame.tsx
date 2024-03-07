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

export default function WinGame(props: any) {
    const { winGame, setWinGame } = props.modals;

    return(
        <MDBModal open={winGame} setOpen={setWinGame} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='text-success'>{props.language === 'EN' ? 'Congratulation!' : 'Поздравление!'}</MDBModalTitle>
              <MDBBtn className='btn-close text-dark' color='none' onClick={() => setWinGame(!winGame)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='text-success font-weight-bold'>{props.language === 'EN' ? 'Ъou guessed the word!' : 'Познахте думата!'}</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='success' onClick={() => setWinGame(!winGame)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    )
}