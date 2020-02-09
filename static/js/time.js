window.onload = function()
{
    str = ''
    var ulx = document.getElementById('uo');
    var lix = ulx.getElementsByTagName('li');
    var x = document.getElementById('list1');
    var p = x.getElementsByTagName('li');
    var divx = document.getElementById('ms');
    function two(x)
    {
        if(x>9)
            return ''+x;
        else
            return '0'+x;
    }
    function change()
    {
        
        for(var i = 0;i < lix.length; i++)
        {   
            mydate = new Date;
            var h = mydate.getHours();
            var m = mydate.getMinutes();//Minutes
            var s = mydate.getSeconds();   
            str = two(h)+'x'+two(m)+'x'+two(s);  
            var ig = lix[i].getElementsByTagName('img');
			path = 'static/Img/'+str[i]+'.png';//{{url_for('static',filename='Img/0')}}
            ig[0].src = path;//{{url_for('static',filename='Img/'+str[i]+'.png')}};
        
        }
    }
    for(var i = 0; i<p.length;i++)
    {
        p[i].index = i+1;
        p[i].onmouseover = function x()
        {
            this.className='box1';
            var hx = this.getElementsByTagName('h2');
            var wx = this.getElementsByTagName('p');
            hx[0].className=wx[0].className='clike'
            divx.innerHTML='<h1>这是第'+this.index+'个月</h1><p>666666</p>';
        }
        p[i].onmouseout = function()
        {
           
            this.className = 'lix';
            var hx = this.getElementsByTagName('h2');
            var wx = this.getElementsByTagName('p');
            hx[0].className=wx[0].className='px';
           divx.innerHTML=''
           
        }
        
        function cssinit(pp)
        {
            p[pp].className='lix';
            var hx = p[pp].getElementsByTagName('h2');
            var wx = p[pp].getElementsByTagName('p');
            hx[0].className=wx[0].className='h2x'
            divx.innerHTML='<h1>这是第'+p[pp].index+'个月</h1><p>666666</p>';
        }
        cssinit(i);
    }
    change();
    setInterval (change,1000);
}