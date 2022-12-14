import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';
import { mockedIssues } from '../mocked/mock-issue';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  showReportIssue = false;

  public issues: Issue[] = [];
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssuesService) {
   }

  ngOnInit(): void {
    this.getIssues()
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  private getIssues() {
    this.issues = /*mockedIssues;*/ this.issueService.getPendingIssues()
  }

}
