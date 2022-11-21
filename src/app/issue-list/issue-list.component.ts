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

  public issues: Issue[] = [];

  constructor(private issueService: IssuesService) {
   }

  ngOnInit(): void {
    this.getIssues()
  }

  private getIssues() {
    this.issues = mockedIssues; /*this.issueService.getPendingIssues()*/
  }

}
