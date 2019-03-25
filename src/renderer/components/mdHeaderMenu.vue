<template>
    <ul class="md-header-button-group">
        <li>
            <Poptip 
                placement="bottom-start" 
                trigger="click" 
                theme="dark" 
                popper-class="file-poptip"
                padding="0"
            >
                <div class="header-button">文件</div>
                <ol slot="content" class="header-button-content">
                    <dl class="header-list-button">
                        <span>新建文件</span>
                        <strong>Ctrl + O</strong>
                    </dl>
                    <dl class="header-list-button">
                        <span>打开文件</span>
                        <strong>Ctrl + N</strong>
                    </dl>
                    <dl class="header-list-button">
                        <span>保存文件</span>
                        <strong>Ctrl + S</strong>
                    </dl>
                    <dl class="header-list-button">
                        <span>另存为...</span>
                        <strong>Ctrl Shift + S</strong>
                    </dl>
                    <dl class="header-list-button">
                        <span>打开文件夹</span>
                        <strong>Ctrl Shift + O</strong>
                    </dl>
                </ol>
            </Poptip>
        </li>
        <li>
            <Poptip 
                placement="bottom-start" 
                trigger="click" 
                theme="dark" 
                popper-class="file-poptip"
                padding="0"
            >
                <div class="header-button">设置</div>
                <ol slot="content" class="header-button-content">
                    <dl class="header-list-button">
                        <span>检查更新</span>
                    </dl>
                    <dl class="header-list-button">
                        <span>使用文档</span>
                    </dl>
                    <dl class="header-list-button">
                        <span>存储设置</span>
                    </dl>
                </ol>
            </Poptip>
            <!-- <div class="header-button">设置</div> -->
        </li>
    </ul>
</template>
<style lang="less" scoped>
.md-header-button-group{
    display: flex;
    overflow: hidden;
    .header-button{
        padding: 0 10px;
        -webkit-app-region: no-drag;
        cursor: pointer;
        &:hover{
            background: #ccc;
        }
    }
    .header-button-content{
        .header-list-button{
            span{
                float: left;
            }
            strong{
                float: right;
            }
        }
    }
}
</style>
