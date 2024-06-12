import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c2f65d89.js";const A=JSON.parse('{"title":"6.1. 構造体","description":"","frontmatter":{},"headers":[],"relativePath":"text/chapter-6/struct.md","filePath":"text/chapter-6/struct.md"}'),p={name:"text/chapter-6/struct.md"},o=l(`<h1 id="_6-1-構造体" tabindex="-1">6.1. 構造体 <a class="header-anchor" href="#_6-1-構造体" aria-label="Permalink to &quot;6.1. 構造体&quot;">​</a></h1><p>構造体は、分散したデータを一つにまとめる事ができる型である。</p><p>例として、traP メンバーの名簿を考えよう。</p><p>今この講習に居るメンバーの traP ID、学籍番号、学年 の情報がほしいとする。</p><p>これらをプログラムで扱うとき、素朴には以下のように個別に変数を宣言すればよい。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">string trap_id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> student_id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> grade</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>しかし、複数人分の情報を扱いたかったり、関数に渡したかったりするときにやや不便である。</p><p>例として、2人のメンバーの情報が完全に一致するか（同一か）を判定するプログラムを以下に記す。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引数が長すぎる……</span></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">trap_id1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">student_id1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">grade1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">trap_id2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">student_id2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">grade2</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> trap_id1 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> trap_id2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> student_id1 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> student_id2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> grade1 </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> grade2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 宣言が長すぎる……</span></span>
<span class="line"><span style="color:#A6ACCD;">    string trap_id1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> student_id1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> trap_id2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> student_id2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> grade1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grade2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    cin </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> trap_id1 </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> student_id1 </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> grade1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> trap_id2 </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> student_id2 </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> grade2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    trap_id1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> student_id1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grade1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    trap_id2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> student_id2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grade2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">same</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">not same</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>これはあまりに長い。 配列を使えば宣言はそれぞれの変数でまとめることはできるが、できれば学生情報は一つの変数にまとめたい。</p><p>ここで、複数の変数をまとめてひとつの値として扱える<strong>構造体 (struct)</strong> を導入し、構造体の <strong>型</strong> を定義する。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>他の言語などではクラスやオブジェクトなどと呼ばれる。</p></div><div class="tip custom-block"><p class="custom-block-title">用語</p><ul><li>構造体に属する変数は<strong>メンバ変数 (member variable)</strong> と呼ばれている。</li><li>ある構造体の型を持った値は、その構造体の<strong>インスタンス (instance)</strong> と呼ばれる。</li></ul></div><p>構造体を用いると、コードは以下のようになる。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Member</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  string trap_id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> student_id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> grade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Member</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">member1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Member</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">member2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> member1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">trap_id </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> member2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">trap_id </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">         member1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">student_id </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> member2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">student_id </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">         member1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">grade </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> member2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">grade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Member zer0star</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zer0-star</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">22BXXXXX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  Member hoshimiya</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hoshimiya</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">99B99999</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">99999</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">zer0star</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> hoshimiya</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">same</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">not same</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>少し見やすくなったように感じないだろうか？</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Member</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  string trap_id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> student_id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> grade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>この部分で構造体 <code>Member</code> を定義している。構造体 <code>Member</code> は以下の3つのメンバ変数を持つ。</p><ul><li><code>string</code> 型の <code>trap_id</code></li><li><code>string</code> 型の <code>student_id</code></li><li><code>int</code> 型の <code>grade</code></li></ul><p>宣言は以下のように対応する。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Member zer0star</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zer0-star</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">22BXXXXX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">Member hoshimiya</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hoshimiya</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">99B99999</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">99999</span><span style="color:#89DDFF;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>これは省略されているが、先頭から順に <code>trap_id = &quot;zer0-star&quot;</code>, <code>student_id = &quot;22BXXXXX&quot;</code>, <code>grade = 2</code> とするという宣言である。</p><p>次に、構造体を使用する方を見てみよう。<code>equals</code> 関数の実装は以下のとおり。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Member</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">member1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Member</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">member2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> member1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">trap_id </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> member2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">trap_id </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">         member1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">student_id </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> member2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">student_id </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">         member1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">grade </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> member2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">grade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>関数の引数として、 <code>int</code> 型などと同様に <code>Member</code> 型を受け取ることができる。 <code>Member</code> 型の変数1つを渡すのは、 <code>trap_id</code> <code>student_id</code> <code>grade</code> の3変数を渡したことと同じになる。</p><p><code>Member</code> 型の各変数にアクセスするには、 <code>member.trap_id</code> のように、 <code>.</code> で変数名とメンバ変数を繋げれば良い。</p><p>このようにしたあとは、以下のように構造体を使って <code>equals</code> を使用することができる。</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">zer0star</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> hoshimiya</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">same</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">not same</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>なんだか仰々しいものに見えるかもしれないが、本質的には複数の変数をまとめて、わかりやすくなるように取り扱っているだけである。</p>`,29),e=[o];function t(r,c,D,F,y,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};