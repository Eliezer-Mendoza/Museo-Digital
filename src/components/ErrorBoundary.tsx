import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error atrapado en el Museo Digital:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="my-8 mx-auto max-w-xl p-8 rounded-lg bg-[#1f1915] border border-amber-900/40 text-center text-[#f4efe8]">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-950/60 border border-amber-600/40 flex items-center justify-center text-amber-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-serif font-bold text-amber-400 mb-2">
            {this.props.fallbackTitle || 'Interrupción Temporal en la Exhibición'}
          </h3>
          <p className="text-sm text-stone-400 mb-6 leading-relaxed">
            Ocurrió un contratiempo al procesar los datos de esta sección histórica. Puedes restablecer la vista sin recargar el museo.
          </p>
          <button
            onClick={this.handleReset}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-amber-300 bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 rounded transition-all active:scale-95"
          >
            Restablecer Sección
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
