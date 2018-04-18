import { TestBed, inject } from '@angular/core/testing';

import { ToDoItemService } from './to-do-item.service';

describe('ToDoItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoItemService]
    });
  });

  it('should be created', inject([ToDoItemService], (service: ToDoItemService) => {
    expect(service).toBeTruthy();
  }));
});
