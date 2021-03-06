import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './Dialog.Basic.Example.scss';

export class DialogBasicExample extends React.Component<{}, {
  hideDialog: boolean
}> {

  constructor(props: {}) {
    super(props);

    this.state = {
      hideDialog: true
    };
  }

  public render() {
    return (
      <div>
        <DefaultButton
          secondaryText='Opens the Sample Dialog'
          onClick={ this._showDialog }
          text='Open Dialog'
        />
        <label id='myLabelId' className='screenReaderOnly'>My sample Label</label>
        <label id='mySubTextId' className='screenReaderOnly'>My Sample description</label>

        <Dialog
          hidden={ this.state.hideDialog }
          onDismiss={ this._closeDialog }
          dialogContentProps={ {
            type: DialogType.normal,
            title: 'All emails together',
            subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
          } }
          modalProps={ {
            titleAriaId: 'myLabelId',
            subtitleAriaId: 'mySubTextId',
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          } }
        >
          { null /** You can also include null values as the result of conditionals */ }
          <DialogFooter>
            <PrimaryButton onClick={ this._closeDialog } text='Save' />
            <DefaultButton onClick={ this._closeDialog } text='Cancel' />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  }

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }
}
