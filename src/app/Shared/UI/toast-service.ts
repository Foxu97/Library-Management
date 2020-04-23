import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core'
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService,
    private translate: TranslateService
  ) { }

  public showErrorToast(message, title = 'errors.error') {
    const translatedError = this.translate.instant(title);
    const tranlatedMessage = this.translate.instant(message);
    this.toastr.error(tranlatedMessage, translatedError)
  }
}
