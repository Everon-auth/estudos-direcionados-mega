import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './upload-file.service';
import { filterResponse, uploadProgress } from '../shared/rxjs.operators';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File> = new Set();
  progress = 0;
  progressDownload=0;

  constructor(
    private service: UploadFileService,
  ) { }

  ngOnInit() {
  }

  onChange(event){
    const selectedFiles = <FileList>event.srcElement.files
    const fileNames=[];

    for(let i =0; i < selectedFiles.length;i++){
      this.files.add(selectedFiles[i])
    }

  }
  onSubmit(){
    this.progress = 0;
    if(this.files && this.files.size >0){
      this.service.upload(this.files,`${environment.BASE_URL}/upload`)
      .pipe(
        uploadProgress(progr => this.progress = progr),
        filterResponse(),
      ).subscribe(response => console.log(`Upload Conclude`));
    }
  }

  onDownloadExcel(){
    this.service.download(`${environment.BASE_URL}/downloadExcel`).subscribe((res:any) =>{
      this.service.handleFile(res,'report.xlsx')
    })
  }
  onDownloadPDF(){
    this.service.download(`${environment.BASE_URL}/downloadPDF`).subscribe((res:any) =>{
      this.service.handleFile(res,'report.pdf')
    })

  }
}
