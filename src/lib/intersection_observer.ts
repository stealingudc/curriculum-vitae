class Observer {
  constructor(public options: Omit<IntersectionObserverInit, "root">) {}

  private _handleScroll(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void {
    entries.forEach((entry) => {
      entry.isIntersecting
        ? ((entry.target as HTMLDivElement).style.opacity = "100")
        : ((entry.target as HTMLDivElement).style.opacity = "0");
      observer.observe(entry.target);
    });
  }

  getIntersectionObserver() {
    return new IntersectionObserver(this._handleScroll, this.options);
  }
}

class ArrayObserver extends Observer {
  constructor(
    public refs: React.RefObject<HTMLElement>[],
    options: Omit<IntersectionObserverInit, "root">
  ) {
    super(options);
  }
}

class ObjectObserver extends Observer {
  constructor(
    public refs: { [x: string]: React.RefObject<HTMLElement> },
    options: Omit<IntersectionObserverInit, "root">
  ) {
    super(options);
  }
}

export { ArrayObserver, ObjectObserver };
