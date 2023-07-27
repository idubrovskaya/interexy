import React, { Component, ErrorInfo, ReactNode } from 'react';
import '../../assets/style.scss';

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class AnimationErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className='error__block'>
          <h2 className='error__element'>ERROR</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AnimationErrorBoundary;
