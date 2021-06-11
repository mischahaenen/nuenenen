import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadTaskComponent } from './file-upload-task.component';

describe('FileUploadTaskComponent', () => {
  let component: FileUploadTaskComponent;
  let fixture: ComponentFixture<FileUploadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
