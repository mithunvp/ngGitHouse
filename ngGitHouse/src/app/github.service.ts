import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { GitRepoInfo } from './git-repo-info';

@Injectable({
  providedIn: 'root'
})
export class GithubService {   

    constructor(private httpClient: HttpClient) { }

    getUserRepos(): Observable<GitRepoInfo> {
        return this.httpClient.get(`https://api.github.com/users/mithunvp/repos`).
            pipe(
                map((item: any) => item.map(p => <GitRepoInfo>
                    {
                        name: p.name,
                        stars: p.stargazers_count,
                        htmlUrl: p.html_url,
                        forks: p.forks,
                        description: p.description
                    })));            
    }
}
