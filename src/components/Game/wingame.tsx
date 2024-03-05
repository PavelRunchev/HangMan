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
              <MDBModalTitle>{props.language === 'EN' ? 'Congratulation!' : 'Поздравление!'}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setWinGame(!winGame)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{props.language === 'EN' ? 'Win Game!' : 'Спечелихте Играта!'}</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setWinGame(!winGame)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    )
}