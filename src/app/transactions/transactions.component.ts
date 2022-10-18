import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TranscationService } from '../transaction.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.less']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = []
  startDate = new Date();
  endDate = new Date();
  selectedTrans: any;
  msgShow = false;
  constructor(private transactionService: TranscationService) { }

  ngOnInit(): void {
    // this.getTransactions();
  }

  getTransactions(): void {
    this.transactions = [];
    this.selectedTrans = undefined;
    this.transactionService.getTransactions(this.startDate, this.endDate).subscribe((data) => {
      this.msgShow = data.length === 0;

      this.transactions = data;
    }, err => {
      this.msgShow = true;
      console.log(err);
    });
  };

  findTransactions(): void {
    this.getTransactions();
  };
  viewTransaction(tid: number): void {
    this.transactions.forEach(trans => {
      if (trans.id === tid) {
        this.selectedTrans = trans;
      }
    });
  };
}


