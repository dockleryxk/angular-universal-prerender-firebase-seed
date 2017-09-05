import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import { PlatformLocation} from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';

export const topMargin = 16;
/**
 * A service that scrolls document elements into view
 */
@Injectable()
export class NoopScrollService {

  private _topOffset: number | null;
  private _topOfPageElement: Element;

  // Offset from the top of the document to bottom of any static elements
  // at the top (e.g. toolbar) + some margin
  get topOffset() {
    return this._topOffset;
  }

  get topOfPageElement() {
   return this._topOfPageElement;
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platform_id: any,
    private location: PlatformLocation
  ) { }

  /**
   * Scroll to the element with id extracted from the current location hash fragment.
   * Scroll to top if no hash.
   * Don't scroll if hash not found.
   */
  scroll() {}

  /**
   * Scroll to the element.
   * Don't scroll if no element.
   */
  scrollToElement(element: Element) {}

  /** Scroll to the top of the document. */
  scrollToTop() {}

  /**
   * Return the hash fragment from the `PlatformLocation`, minus the leading `#`.
   */
  private getCurrentHash() {
    return this.location.hash.replace(/^#/, '');
  }
}
