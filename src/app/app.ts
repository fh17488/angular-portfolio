import { Component, HostListener, computed, signal } from '@angular/core';
import { CATEGORIES, WORKS, Work, WorkCategory } from './data/works';
import { EXPERIENCE } from './data/experience';
import { RESEARCH } from './data/research';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly works = WORKS;
  readonly categories = CATEGORIES;
  readonly experience = EXPERIENCE;
  readonly research = RESEARCH;
  readonly year = new Date().getFullYear();

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly filter = signal<'all' | WorkCategory>('all');
  readonly selected = signal<Work | null>(null);

  readonly filteredWorks = computed(() => {
    const f = this.filter();
    return f === 'all' ? WORKS : WORKS.filter((work) => work.category === f);
  });

  readonly selectedIndex = computed(() => {
    const current = this.selected();
    if (!current) {
      return -1;
    }
    return this.filteredWorks().findIndex((work) => work.image === current.image);
  });

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      if (this.selected()) {
        this.closeWork();
      } else if (this.menuOpen()) {
        this.menuOpen.set(false);
      }
      return;
    }
    if (!this.selected()) {
      return;
    }
    if (event.key === 'ArrowRight') {
      this.nextWork();
    }
    if (event.key === 'ArrowLeft') {
      this.prevWork();
    }
  }

  setFilter(id: 'all' | WorkCategory): void {
    this.filter.set(id);
  }

  openWork(work: Work): void {
    this.selected.set(work);
    document.body.style.overflow = 'hidden';
  }

  closeWork(): void {
    this.selected.set(null);
    document.body.style.overflow = '';
  }

  nextWork(): void {
    const list = this.filteredWorks();
    const i = this.selectedIndex();
    if (i < 0 || list.length === 0) {
      return;
    }
    this.selected.set(list[(i + 1) % list.length]);
  }

  prevWork(): void {
    const list = this.filteredWorks();
    const i = this.selectedIndex();
    if (i < 0 || list.length === 0) {
      return;
    }
    this.selected.set(list[(i - 1 + list.length) % list.length]);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
