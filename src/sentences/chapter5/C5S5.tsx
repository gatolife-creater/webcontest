import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Image } from "../../components/Image";
import { MdOpenInNew } from "react-icons/md";
import { Balloon } from "../../components/Balloon";

export const C5S5 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>サプライチェーン</MiniSectionTitle>
      <MiniSectionTitle>株式会社chaintope</MiniSectionTitle>
      <SubSectionTitle>
        サプライチェーンにブロックチェーンを活用する理由
      </SubSectionTitle>
      
      <p>
        サプライチェーン（SC）とは、製品の原材料・部品の調達から生産、販売、消費までの一連の流れを指しますが、SCでは「モノ」「カネ」等多くの情報がやり取りされます。誤った情報が記録・流通してしまうと、取引の前提が崩れ、ビジネスが成立しなくなってしまいますが、ここにブロックチェーン技術を用いることで、情報の正確性を保証します。
        特に、当社の開発したTapyrus（タピルス）は、パブリックチェーン
        <small>※1</small>&nbsp;の持つオープン性と、プライベートチェーン
        <small>※2</small>
        &nbsp;の特性である管理権限の制御を、技術上同時に実現可能です。
        経済のグローバル化が進む今日、情報の正確性を損なわずに安価にシステムを実装・拡張できるTapyrusは、多くのお客様に評価いただいています。
      </p>
      <small>
        ※1：パブリックチェーン・・・管理者がおらず、誰でも参加可能なブロックチェーン。
        <br />
        ※2：プライベートチェーン・・・管理者が許可した参加者が参加可能なブロックチェーン。
      </small>

      <SubSectionTitle>今後の取り組み</SubSectionTitle>
      <p>
        サプライチェーンや電力の例でもお示ししたとおり、当社のブロックチェーン技術の強みは、電子データの真正性証明やそのデータを基にした価値の取引を、多くの主体を巻き込んだ形で実現可能であることです。
        現在当社では、様々な情報（物流・商流情報、電力の発電・消費量、温室効果ガスの排出・削減量、行政機関の保有する住民情報等）の証明、さらにそれらの情報の価値化を、様々な分野のお客様とともに進めています。
        カーボンニュートラルの実現やサーキュラーエコノミー社会への移行といった人類共通の目標を見据えながらも、（世界中の）地域住民の日々の生活を少しでも良くするために、ブロックチェーンの社会実装を推進してまいります。
      </p>

      <SubSectionTitle>皆さんへのメッセージ</SubSectionTitle>
      <p>
        ブロックチェーンという最先端技術を学ぶことは、みなさんにとってそれ自体非常にエキサイティングな体験だと思います。
        そのうえで、もしみなさんが将来、仕事としてブロックチェーンに関わることを検討されているのでしたらもう一つ、「これは誰の暮らしを便利にするのか？」という視点を持つと良いと考えます。
        例えば「電気」という100年前の最先端技術は、ファラデーの新発見が魅力的だったことに加え、エジソンをはじめとする多くの先人の努力により、それが蒸気機関よりも「便利」だと多くの人々に認識されるに至ったために、世の中に広まりました。
        みなさんの学ばれた知識や技術の種が、それぞれの形で大きく花開くことをお祈りいたします。
      </p>
      <p className="my-3 text-right">
        <a
          href="https://www.chaintope.com/"
          className="link-secondary link text-right"
          target="blank"
        >
          chaintope
          <MdOpenInNew style={{ display: "inline" }} />
        </a>
      </p>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};
