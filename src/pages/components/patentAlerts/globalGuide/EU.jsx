export default function EU() {
  return (
    <>
      <h3 className="pl-6 py-4 border-b border-gray-200">欧盟</h3>
      <div className="px-8 py-4">
        <div className="mt-1 mb-2">
          <p className="text-lg leading-6">一、制度简介</p>

          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            欧盟的知识产权类型主要包括：欧洲专利、欧洲统一专利、欧共体商标、注册和非注册的外观设计、版权。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            欧盟在其成立的短短20多年间，积极推动了欧洲各国的知识产权统一化进程，其在知识产权方面颁布了并通过了一系列的法令。目前欧盟的主要知识产权法律包括：《欧洲专利公约》、《欧洲专利审查指南》、《欧共体商标条例》、《信息社会的著作权及邻接权指令》等等。
          </div>
        </div>

        <div className="mt-1 mb-2">
          <p className="text-lg leading-6">二、维权案例</p>
          <h4 className="my-4">
            （一）基础专利未包含的产品组合物不得申请辅助保护证书
          </h4>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            医药公司Boehringer取得了药品Micardis的辅助保护证书，其活性成分是“telmisartan”。随后，Boehringer获得了药品MicardisPlus——包含活性成分telmisartan和hydrochlorothiazide（已进入公共领域）——的上市许可（marketingauthorisation）。基于该上市许可，Boheringer准备申请药品MicardisPlus的辅助保护证书。但相关基础专利中，只涉及活性成分telmisartan，并未提到telmisartan和hydrochlorothiazide的组合物。英国知识产权局于是建议Boehringer首先修改基础专利，增加有关telmisartan和hydrochlorothiazide组合物的内容，之后再提出对该组合物的辅助保护证书申请。最终，英国知识产权局批准了Boehringer基于修改后的专利提交的辅助保护证书申请。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            仿制药公司Actavis反对批准Boehringer的上述组合物辅助保护证书申请，认为在提交争议保护证书申请时，基础专利中并不存在该组合物。Boehringer则辩称，欧盟和成员国法律均允许对授权专利进行修改，修改后的专利权对增加的组合物（也即辅助保护证书的保护对象）具有溯及力。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            鉴于此，英国高等法院决定中止案件审理，并请求欧洲法院（CourtofJustice）就以下问题作出初步裁定：（1）能否为获得辅助保护证书，修改授权后的专利，增加权利要求内容；以及，（2）已经依据基础专利权利要求取得了一项活性成分的辅助保护证书的专利权人，能否再通过修改基础专利——增加上述活性成分与另一活性成分组合物，申请获得新增组合物的辅助保护证书？
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            欧洲法院仅对第二个问题作出裁定，认为本案争议焦点在于，如何理解《欧洲议会和理事会关于医药产品辅助保护证书的条例（第（EC）469/2009号）》（以下简称《欧盟第（EC）469/2009号条例》）第1条、第3条以及第13条的规定，尤其是第1条规定的，基础专利保护范围必须包含（作为辅助保护证书保护对象的）产品“本身”。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            Actavis坚持认为，上述规定应当理解为，辅助保护证书的保护对象必须是基础专利的真实发明主题。换句话说，该产品自身必须构成专利的核心创造性，并应排除已经受基础专利和辅助保护证书保护的活性物质与该基础发明主题之外的其他物质组成的组合物。否则，会不合理增加辅助保护证书提供的独占权利延长保护期。而Boehringer认为，只要基础专利权利要求中出现了产品组合物，即足以证明其应是受保护的。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            欧洲法院分析后认为，本案争议组合物包括两个活性成分（telmisartan和hydrochlorothiazide），由于hydrochlorothiazide已经进入公共领域，因此基础专利的发明主题仅包括活性成分telmisartan。考虑到平衡不同群体利益的原则，欧洲法院裁定，专利权人不得对其授权专利的唯一发明主题的活性成分与该专利之外的其他成分组成的组合物申请药物辅助保护证书。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            欧洲法院的此项裁定是在平衡医药工业领域和公共健康利益基础上作出的。如果对一项基础专利活性成分与该专利之外的其他成分组成的组合物申请辅助保护证书不加任何限制，则意味着对医药工业领域利益的过分倾斜。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            因此，欧洲法院再次肯定了其此前对有关产品组合物辅助保护证书争议案件的裁定结论（ActavisvsSanofi案（案件号：C-443/12），以及GeorgetownUniversityII案（案件号：C-484/15））。尽管欧洲法院未明确答复，能否在授权专利权利要求中增加相关组合物内容以获得辅助保护证书的问题，本案裁定结论明显已经默示驳回了此种可能。
          </div>
        </div>

        <div className="mt-1 mb-2">
          <p className="text-lg leading-6">
            三、如何应对欧盟的知识产权侵权纠纷
          </p>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            目前，欧洲已经成为我国企业的重要市场，每年价值上万亿的货品将出口到欧盟市场。与此同时，我国企业在欧盟不断地遭遇侵权诉讼。由于欧盟对侵权行为的严厉打击，仅仅海关查扣就足以造成大量的损失，而一旦在侵权诉讼中败诉，将面临可能彻底禁止在欧盟市场销售的风险。因此，如何防止侵权纠纷已经是我国企业迫在眉睫的一项课题。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            首先，在进入欧洲市场之前，应当首先进行海外专利预警工作。该工作包括对竞争对手的分析、发生侵权纠纷的可能性、以及对主要市场国的相关法律法规和政策的分析等等。充足和完善的专利预警工作，可以在产品进入欧洲市场前预估所面临的风险并根据目标国的法律法规来提前布置应对措施。例如，如果面临侵权威胁时，可以使用“鱼雷”措施，即提前在审判时间很长的国家提起专利有效性确认之诉。如此，则根据布鲁塞尔条例，由于该诉讼与侵权诉讼有相同的诉因，因此，首先受理的法院具有管辖权。从而，对方起诉侵权的法院将不得不拒绝管辖，由此达到了延长审判时间的效果。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            在进入欧洲市场时，如果遇到侵权纠纷，应当采取积极的应对政策，如按时出庭、在可能的情况下提出无效抗辩或者按规定时间上诉等。如果采取消极的应对政策，例如缺席审判，则可能导致最有利于原告的结果。由于欧盟的法律法规是一个庞大而复杂的体系，因此，在卷入侵权纠纷时，应当听取专业人士的意见，使用所有可供使用的法律武器和可行的法律救济途径，以便减小损失并达到所期望的结果。
          </div>

         
        </div>

        <div className="mt-1 mb-2">
          <p className="text-lg leading-6">四、如何在欧盟开展知识产权维权</p>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            鉴于欧盟的繁杂的法律法规体系，中国企业应积极利用相关的法律法规维护自己的正当权益。首先应做好品牌的海外监控工作。根据本企业的专利布局策略，利用多渠道长期监控类似产品等。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            遭到侵权时，首先应当及时收集充足的证据，以便在维权时做好举证工作。然后，委托律师进行维权的准备工作，向对方发送警告信，表达希望停止侵权并支付使用费用的主张。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            经沟通无效的，可以提起侵权诉讼。如果对方有进出口侵权物品的意向时，可以向海关申请查扣嫌疑物品。如果在紧急情况下，可以向司法机关提供担保以便申请临时禁令，请求查扣嫌疑物品。

          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            在提起侵权诉讼时，如有可能，应当挑选最有利的审理法院。根据布鲁塞尔条例，多地的法院可能同时具有管辖权，此时应当根据权利人的主张选择最有利的法院。由于各国的审理经验、法律体系的不同，欧盟的法律可能在各国法院有不同的释义，并且各国法院的审理由于结合了个成员国的国内法，在人员组成、赔付标准、审理时间上都由大小不等的差异。权利人应当在考虑自己的要求和战略的前提下，选择对己方最有利的法院提起诉讼。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            如果对法庭判决拒不执行的，可以请求法院强制执行。
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            总之，我国企业应当充分利用欧盟的各项法律法规，不仅是欧洲专利公约、关于知识产权执行的指令和第608/2013号令等与知识产权相关的指令，并且应当积极结合其他的如与反不正当竞争、反垄断、反倾销相关的法律法规，甚至结合其他有利的国际公约和法律原则全方位、多角度的维护自身的权益。
          </div>

   
        </div>

        <div className="mt-1 mb-2">
          <p className="text-lg leading-6">五、维权援助机构</p>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 1.德国华孙专利律师赫律师事务所
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            注册地：德国慕尼黑
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 注册时间：2011年
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 主要负责人：孙一鸣
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            网址：www.huasun.de
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 办公地址：北京市海淀区中关村南大街12号天作国际中心1号楼1103室
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            联系方式0049（0）8938380170
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            邮箱info@huasun.de
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 传真0049（0）8938380171

          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 工作语言：普通话、广东话、英语、法语、德语、西班牙语、俄语、乌克兰语
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 2.法国凯步知识产权事务所CabinetPlasseraud
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 注册地：法国
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            注册时间：1906
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 主要负责人：LoiselBertrand,Ellenkim
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 网址：www.plass.com
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 中国办公地址：上海市天目西路111号17楼
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            联系人：童锡君
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 联系方式：电话021-61242975，13564604658
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 邮箱docket@plass.com
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 传真021-61242976
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 工作语言：普通话、英语、法语、德语、西班牙语、阿拉伯语、日语、韩语

          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 3.意大利雅格巴契事务所
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 注册地：意大利都灵10152-柯尔索艾米利亚8号
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 主要负责人：Ms.EnricaAcutoJacobacci
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 网址：www.jacobacci.com

          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 联系电话：00390112440311
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            邮箱：vzazzera@jacobacci.com
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 传真：0039011286300
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 工作语言：普通话、英语、法语、德语、西班牙语、意大利语
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 4.芬兰-KolsterOyAb（哥斯德）事务所
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 注册地：IsoRoobertinkatu23,00100Helsinki,Finland.
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 注册时间：1936年
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            主要负责人：AnttiPeltonen,CEO
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 网址：www.kolster.fi
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 联系电话：358201370500
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 工作语言：普通话、英语、法语、德语、芬兰语、瑞典语
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 5.荷兰AOMB知识产权咨询事务所
          </div>

          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 注册地：荷兰埃因霍温J.F.Kenneydylaan2,5612AB

          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 注册时间：1966
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 主要负责人：ErnestBaeten
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 网址：www.aomb.nl

          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 办公地址：荷兰埃因霍温J.F.Kenneydylaan2,5612AB
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;联系方式：电话31402199033
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp;
            邮箱c.hendriks@aomb.nl
          </div>
          <div className="font-light leading-6 text-indent-2">
            &nbsp;&nbsp; &nbsp;&nbsp; 工作语言：英语、德语、西班牙语 
          </div>
        
        </div>
      </div>
    </>
  );
}
