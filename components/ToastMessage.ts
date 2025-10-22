/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('toast-message')
export class ToastMessage extends LitElement {
  static override styles = css`
    .toast {
      line-height: 1.6;
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #000;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      width: min(500px, 85vw);
      transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      border: 2px solid #fff;
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.6);
      text-wrap: pretty;
      z-index: 1000;
    }
    .toast.error {
      background-color: #2a0000;
      border-color: #ff4444;
    }
    .toast.info {
      background-color: #001a2a;
      border-color: #4a9eff;
    }
    .message {
      flex: 1;
      font-size: 14px;
    }
    button {
      border-radius: 100px;
      aspect-ratio: 1;
      border: none;
      background: #fff;
      color: #000;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
      padding: 4px 8px;
      transition: transform 0.2s;
    }
    button:hover {
      transform: scale(1.1);
    }
    .toast:not(.showing) {
      transition-duration: 1s;
      transform: translate(-50%, -200%);
    }
    a {
      color: #4a9eff;
      text-decoration: underline;
    }
    a:hover {
      color: #6bb0ff;
    }
  `;

  @property({ type: String }) message = '';
  @property({ type: Boolean }) showing = false;
  @property({ type: String }) messageType: 'info' | 'error' = 'info';

  private hideTimer: number | null = null;

  private renderMessageWithLinks() {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = this.message.split( urlRegex );
    return parts.map( ( part, i ) => {
      if ( i % 2 === 0 ) return part;
      return html`<a href=${part} target="_blank" rel="noopener">${part}</a>`;
    } );
  }

  override render() {
    return html`<div class=${classMap({
      showing: this.showing,
      toast: true,
      error: this.messageType === 'error',
      info: this.messageType === 'info'
    })}>
      <div class="message">${this.renderMessageWithLinks()}</div>
      <button @click=${this.hide}>✕</button>
    </div>`;
  }

  show(message: string, type: 'info' | 'error' = 'info', autoHideMs = 5000) {
    // Clear any existing timer
    if (this.hideTimer !== null) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }

    this.showing = true;
    this.message = message;
    this.messageType = type;

    // Auto-hide after specified time
    if (autoHideMs > 0) {
      this.hideTimer = window.setTimeout(() => {
        this.hide();
      }, autoHideMs);
    }
  }

  hide() {
    if (this.hideTimer !== null) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
    this.showing = false;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'toast-message': ToastMessage
  }
}
