import { Component, OnInit } from '@angular/core';
import { Branch } from '../model/branch';
import { InfodeskService } from '../services/infodesk.service';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {


  branches:Branch[];
  constructor(private inv:InfodeskService) { }

  ngOnInit() {
  this.branches=this.inv.getAllBranches();
  }


}
