import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
    selector: 'app-gitrepos',
    templateUrl: './gitrepos.component.html',
    styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit {
    public gitRepoList;
    constructor(private githubserv: GithubService) { }

    ngOnInit() {
        this.loadGithubRepos();
    }

    public loadGithubRepos() {
        this.githubserv.getUserRepos().subscribe((data) => {
            this.gitRepoList = data;
        });
    }
}
