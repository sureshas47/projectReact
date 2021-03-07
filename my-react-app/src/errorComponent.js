import React, {Component} from 'react';

class ErrorComponent extends Component {
    render() {
        return (
            <div>
                <p>something went wrong</p>
                <button onClick={() => this.props.onRetry}>Retry</button>
            </div>
        );
    }
}

export default ErrorComponent;