(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{zrcO:function(t,n,e){"use strict";e.r(n),e.d(n,"UsersModule",function(){return M});var o=e("SVse"),a=e("rhD1"),c=e("iInd"),i=e("HeVh"),r=e("lJxs"),b=e("UXun"),s=e("8Y7J"),d=e("t0Il"),l=e("q7Ft"),u=e("l0rg"),g=e("Tj54"),m=e("SqCe"),p=e("Q2Ze"),f=e("Dxy4"),h=e("pu8Q"),S=e("rJgo");function v(t,n){if(1&t){const t=s.Ub();s.Tb(0,"button",13),s.bc("click",function(){return s.tc(t),s.fc(),s.qc(2).toggle()}),s.Tb(1,"mat-icon",14),s.Dc(2,"menu"),s.Sb(),s.Sb()}}function T(t,n){1&t&&(s.Tb(0,"div",15),s.Ob(1,"mat-spinner"),s.Sb())}function O(t,n){if(1&t){const t=s.Ub();s.Tb(0,"div"),s.Tb(1,"button",16),s.Dc(2),s.Tb(3,"mat-icon"),s.Dc(4,"more_vert"),s.Sb(),s.Sb(),s.Tb(5,"mat-menu",null,17),s.Tb(7,"button",18),s.bc("click",function(){return s.tc(t),s.fc().logout()}),s.Tb(8,"mat-icon"),s.Dc(9,"logout"),s.Sb(),s.Tb(10,"span"),s.Dc(11,"Logout"),s.Sb(),s.Sb(),s.Sb(),s.Sb()}if(2&t){const t=s.qc(6),n=s.fc();s.Bb(1),s.kc("matMenuTriggerFor",t),s.Bb(1),s.Fc(" Hi, ",n.username,"!")}}function k(t,n){1&t&&(s.Tb(0,"a",19),s.Dc(1,"Back"),s.Sb())}const C=["*"],y=[{path:"",children:[{path:"user-dashboard",component:(()=>{class t{constructor(t,n){this.breakpointObserver=t,this.loaderService=n,this.username=null,this.isTokenExpired=!0,this.isHandset$=this.breakpointObserver.observe(i.b.Handset).pipe(Object(r.a)(t=>t.matches),Object(b.a)())}}return t.\u0275fac=function(n){return new(n||t)(s.Nb(i.a),s.Nb(d.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-user-dashboard"]],ngContentSelectors:C,decls:41,vars:17,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],["mat-list-item","","href","#"],["matPrefix",""],[1,"spacer"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["class","loader-container",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-button","","routerLink","/store",4,"ngSwitchDefault"],["id","content"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"],[1,"loader-container"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-button","","routerLink","/store"]],template:function(t,n){1&t&&(s.jc(),s.Tb(0,"mat-sidenav-container",0),s.Tb(1,"mat-sidenav",1,2),s.gc(3,"async"),s.gc(4,"async"),s.gc(5,"async"),s.Tb(6,"mat-toolbar"),s.Tb(7,"mat-icon"),s.Dc(8,"dashboard"),s.Sb(),s.Dc(9," Dashboard "),s.Sb(),s.Tb(10,"mat-nav-list"),s.Tb(11,"a",3),s.Tb(12,"mat-icon"),s.Dc(13,"library_books"),s.Sb(),s.Dc(14," Rentals "),s.Sb(),s.Tb(15,"a",3),s.Tb(16,"mat-icon",4),s.Dc(17,"video"),s.Sb(),s.Dc(18," Return "),s.Sb(),s.Ob(19,"div",5),s.Ob(20,"br"),s.Ob(21,"br"),s.Ob(22,"br"),s.Ob(23,"br"),s.Sb(),s.Sb(),s.Tb(24,"mat-sidenav-content"),s.Tb(25,"mat-toolbar",6),s.Cc(26,v,3,0,"button",7),s.gc(27,"async"),s.Cc(28,T,2,0,"div",8),s.gc(29,"async"),s.Tb(30,"span"),s.Dc(31,"VHS-Rental User Dashboard"),s.Sb(),s.Ob(32,"div",5),s.Tb(33,"div",9),s.Cc(34,O,12,2,"div",10),s.Cc(35,k,2,0,"a",11),s.Sb(),s.Sb(),s.Tb(36,"div",12),s.Tb(37,"div"),s.ic(38),s.Sb(),s.Sb(),s.Ob(39,"router-outlet"),s.Ob(40,"app-footer"),s.Sb(),s.Sb()),2&t&&(s.Bb(1),s.kc("mode",s.hc(4,9,n.isHandset$)?"over":"side")("opened",!1===s.hc(5,11,n.isHandset$)),s.Cb("role",s.hc(3,7,n.isHandset$)?"dialog":"navigation"),s.Bb(25),s.kc("ngIf",s.hc(27,13,n.isHandset$)),s.Bb(2),s.kc("ngIf",s.hc(29,15,n.loaderService.isLoading)),s.Bb(5),s.kc("ngSwitch",n.isTokenExpired),s.Bb(1),s.kc("ngSwitchCase",!1))},directives:[l.b,l.a,u.a,g.a,m.c,m.a,p.g,l.c,o.l,o.n,o.o,o.p,c.f,f.b,h.b,S.d,S.a,S.b,f.a,c.d],pipes:[o.b],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px;box-shadow:3px 0 6px rgba(0,0,0,.24)}body[_ngcontent-%COMP%]{margin:0}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;z-index:1}.loader-container[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background:#615f5f;opacity:.9;z-index:99}span[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:20px;text-align:center;text-transform:uppercase;color:#fffefe}.mat-toolbar[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]{background-color:#1a1a14}.mat-toolbar[_ngcontent-%COMP%]{color:#e8dfdf}#content[_ngcontent-%COMP%]{padding:20px;min-height:130vh}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:inherit;top:0;width:100%}a[_ngcontent-%COMP%]{background-color:#1a1a14}.mat-list-item[_ngcontent-%COMP%]{color:#e8dfdf}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),t})()},{path:"returns",component:e("cXBL").a},{path:"",redirectTo:"user-dashboard",pathMatch:"full"}]}];let w=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(n){return new(n||t)},imports:[[c.e.forChild(y)],c.e]}),t})(),M=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(n){return new(n||t)},imports:[[o.c,w,i.c,u.b,f.c,l.d,g.b,m.b,a.a]]}),t})()}}]);