/* ============================================================
   The Rotator — types a word, holds, deletes, repeats.
   The most copy-pasted JS class in the AI ecosystem.
   ============================================================ */
export class Rotator {
  constructor(el, words, opts = {}) {
    this.el = el;
    this.cur = el.querySelector(".rotator-current");
    this.words = words;
    this.i = 0;
    this.text = "";
    this.deleting = false;
    this.typeMs = opts.typeMs ?? 70;
    this.delMs = opts.delMs ?? 32;
    this.holdMs = opts.holdMs ?? 1500;
    this._tick();
  }

  _tick() {
    const word = this.words[this.i];
    this.text = this.deleting
      ? word.slice(0, this.text.length - 1)
      : word.slice(0, this.text.length + 1);
    this.cur.textContent = this.text;

    if (!this.deleting && this.text === word) {
      setTimeout(() => {
        this.deleting = true;
        this._tick();
      }, this.holdMs);
      return;
    }
    if (this.deleting && this.text === "") {
      this.deleting = false;
      this.i = (this.i + 1) % this.words.length;
    }
    setTimeout(() => this._tick(), this.deleting ? this.delMs : this.typeMs);
  }
}
