<template>
    <div class="sysOperate">
        <div class="sysOperate-nav">
            <a class="sysOperate-btn" href="javascript:void(0)" @click="dialogUserInfo = true" ><span class="glyphicon glyphicon-user"></span> 个人信息</a>
            <a class="sysOperate-btn" href="javascript:void(0)" @click="dialogUpdatePwd = true" ><span class="glyphicon glyphicon-lock"></span> 修改密码</a>
            <a class="sysOperate-btn" href="javascript:void(0)" @click="dialogAboutUs = true" ><span class="glyphicon glyphicon-paperclip"></span> 关于我们</a>
            <router-link to="/login" class="sysOperate-btn"><span class="glyphicon glyphicon-off"></span>退出登录</router-link>
        </div>

        <el-dialog title="个人信息" v-model="dialogUserInfo" size="tiny" class="dialog-user-info">
            <el-form :model="form">
                <el-form-item label="所属单位" :label-width="formLabelWidth">
                    <el-input v-model="form.name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogUserInfo = false">取 消</el-button>
                <el-button type="primary" @click="dialogUserInfo = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="修改密码" v-model="dialogUpdatePwd" size="tiny">
            <el-form :model="form">
                <el-form-item label="旧密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" type="password" ></el-input>
                </el-form-item>
                <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" type="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogUpdatePwd = false">取 消</el-button>
                <el-button type="primary" @click="dialogUpdatePwd = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="关于我们" v-model="dialogAboutUs" size="tiny">
            <el-form :model="form">
                <el-row>
                    <p style="line-height:21px;font-size:13px;">
                        <span style="margin-left:25px;"></span>三小场所安全管理系统由深圳市中电数通科技有限公司结合政府需求开发。系统开发结合了大量的实际案例分析，结合中国武警学院专家团队科学合理的算法公式，在三小场所基本信息、日常检查、复核结果的基础上，科学评定各个三小场所的安全等级。该系统充分运用了大数据、云计算、物联网、互联网、GIS空间地理信息技术等先进技术，将为的三小场所管理提供更科学规范的检查依据，建立更全面客观的信息数据支持，使提升全区消防安全管理能力再上一个新台阶，实现新突破！
                        <br><span style="margin-left:25px;"></span>深圳市中电数通科技有限公司成立于2009年，本公司专注智慧安全、消防行业管理咨讯、安全管理系统集成等产品和服务的研发、生产和销售为一体的国家重点高新技术企业。产品主要应用于政府、武警消防部队、公安消防监督管理、公司、学校、医院、三小场所等区域。公司成立了中国武警学院“研究生工作站”，“消防安全协同研发中心”，华侨大学“建筑电气安全技术研发中心”。
                    </p>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="dialogAboutUs = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script> 
    export default{
        name: "sysOperate",
        data(){
            return{
                dialogUserInfo: false,
                dialogUpdatePwd: false,
                dialogAboutUs: false,
                form: {
                    name: '',
                    region: '',
                },
                formLabelWidth: '120px'
            };

        },
        components:{ 
        }
    }
</script>

<style>
    .sysOperate-nav {
        margin-top: 15px;
    }

    .sysOperate-btn{
        float: left;
        padding-left: 10px;
        line-height: 40px;
        color: #FFF;
        font-size: 12px;
        font-family: Microsoft Yahei;
        -webkit-transition: background 0.3s;
        -moz-transition: background 0.3s;
        -o-transition: background 0.3s;
        transition: background 0.3s;
    }
    .sysOperate-btn:hover {
        background: #8a0c0c;
        text-decoration: none;
    }

    .dialog-user-info {
    }

</style>
